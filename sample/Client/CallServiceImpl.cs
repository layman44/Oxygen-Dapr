﻿using Autofac;
using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Mesh.Dapr;
using RemoteInterface;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace Client
{
    public class CallServiceImpl : ICallService
    {
        private readonly IServiceProxyFactory serviceProxyFactory;
        private readonly IEventBus eventBus;
        private readonly IStateManager stateManager;
        public CallServiceImpl(IServiceProxyFactory serviceProxyFactory, IEventBus eventBus, IStateManager stateManager)
        {
            this.serviceProxyFactory = serviceProxyFactory;
            this.eventBus = eventBus;
            this.stateManager = stateManager;
        }
        public async Task<InputDto> RemoteCallTest(InputDto input)
        {
            var helloService = serviceProxyFactory.CreateProxy<IHelloService>();
            await stateManager.SetState(new TestStateDto("mykey", new MyTestStateContent() { Name = "mystate" }));
            var getState = await stateManager.GetState<MyTestStateContent>(new TestStateDto("mykey"));
            var delState = await stateManager.DelState(new TestStateDto("mykey"));
            var invokeresult = await helloService.GetUserInfo(new InputDto() { name = "xiaoming" });
            var eventresult = await eventBus.SendEvent(new TestEventDto() { myword = "abc" });
            var actorresult = await helloService.GetUserInfoByActor(new ActorInputDto() { name = "xiaoming", ActorId = "1" });
            return new InputDto() { name = $"普通调用成功，回调：{JsonSerializer.Serialize(invokeresult)},事件发送{(eventresult != null ? "成功" : "失败")},状态写入成功，值：{getState.Name},actor调用成功，回调：{JsonSerializer.Serialize(actorresult)}" };
        }
        public async Task<MultipleTestOutput> MultipleTest(MultipleTestInput input)
        {
            var max = input.Times <= 0 ? 1 : input.Times;
            var succ = 0;
            var fail = 0;
            var _event = new AutoResetEvent(false);
            ConcurrentBag<long> times = new ConcurrentBag<long>();
            Stopwatch _sw = new Stopwatch();
            _sw.Start();
            Parallel.For(0, max, async i =>
            {
                var helloService = serviceProxyFactory.CreateProxy<IHelloService>();
                Stopwatch _sw_item = new Stopwatch();
                _sw_item.Start();
                var invokeresult = await helloService.GetUserInfo(new InputDto() { name = "小明" });
                var eventresult = await eventBus.SendEvent(new TestEventDto() { myword = "abc" });
                _sw_item.Stop();
                if (invokeresult != null)
                {
                    Interlocked.Increment(ref succ);
                    times.Add(_sw_item.ElapsedMilliseconds);
                }
                else
                    Interlocked.Increment(ref fail);
                if (succ + fail == max)
                    _event.Set();
            });
            _event.WaitOne();
            _sw.Stop();
            return new MultipleTestOutput()
            {
                AllTimes = input.Times,
                SuccTimes = succ,
                FailTimes = fail,
                CustTimes = _sw.ElapsedMilliseconds,
                Detail = string.Join(",", times.Where(x => x > 100).ToList())
            };
        }
    }
}
