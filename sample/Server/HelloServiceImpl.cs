﻿using Autofac;
using Microsoft.Extensions.Logging;
using Oxygen.Client.ServerProxyFactory.Interface;
using Oxygen.Mesh.Dapr;
using Oxygen.Mesh.Dapr.Model;
using RemoteInterface;
using System;
using System.Threading.Tasks;

namespace Server
{
    public class HelloServiceImpl : BaseActorService<MyActor>, IHelloService
    {
        private readonly ILogger<HelloServiceImpl> logger;
        private readonly IStateManager stateManager;
        public HelloServiceImpl(ILogger<HelloServiceImpl> logger, IStateManager stateManager)
        {
            this.logger = logger;
            this.stateManager = stateManager;
        }
        public async Task<OutDto> GetUserInfo(InputDto input)
        {
            return await Task.FromResult(new OutDto() { Word = $"hello {input?.name}" });
        }
        public async Task<OutDto> GetUserInfoByActor(ActorInputDto input)
        {
            if (ActorData == null)
                ActorData = new MyActor() { Index = 0, AutoSave = true };
            ActorData.Index++;
            if (ActorData.Index == 10)
                ActorData.DeleteModel();
            return await Task.FromResult(new OutDto() { Word = $"hello {ActorData.Index}" });
        }

        public override async Task SaveData(MyActor data, ILifetimeScope scope)
        {
            if (data != null)
                await scope.Resolve<IHelloRepository>().SaveData(data);
            await Task.CompletedTask;
        }

        public async Task<OutDto> Test()
        {
            return await Task.FromResult(new OutDto() { Word = "noinput" });
        }
    }
    public class MyActor : ActorStateModel
    {
        public int Index { get; set; }
        public override bool AutoSave { get; set; }
        public override int ReminderSeconds { get => 10; }
    }
    public interface IHelloRepository
    {
        Task SaveData(MyActor actor);
    }
    public class HelloRepository: IHelloRepository
    {
        public Guid? Id { get; set; }
        public HelloRepository()
        {
            Id = Id ?? Guid.NewGuid();
        }
        public async Task SaveData(MyActor actor)
        {
            Console.WriteLine($"仓储实例ID：{Id}，持久化对象：{actor?.Index}");
            await Task.CompletedTask;
        }
    }
}