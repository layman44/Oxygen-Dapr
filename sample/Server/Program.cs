﻿using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Oxygen.IocModule;
using RemoteInterface;
using Server.interfaces;
using System;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace Server
{
    class Program
    {
        static async Task Main(string[] args)
        {
            await CreateDefaultHost(args).Build().RunAsync();
        }
        static IHostBuilder CreateDefaultHost(string[] args) => new HostBuilder()
            .ConfigureContainer<ContainerBuilder>(builder =>
            {
                //注入oxygen依赖
                builder.RegisterOxygenModule();
                //注入测试demo
                builder.RegisterType<HelloServiceImpl>().As<IHelloService>().InstancePerLifetimeScope();
                builder.RegisterType<HelloEventHandler>().As<IHelloEventHandler>().InstancePerLifetimeScope();
            })
            .ConfigureLogging((hostingContext, logging) => {
                logging.AddConsole();
            })
            .ConfigureServices((context, services) =>
            {
                //注册成为oxygen服务节点
                services.StartOxygenServer();
                //注册全局拦截器
                //LocalMethodAopProvider.RegisterPipelineHandler(async (obj) =>
                //{
                //    Console.WriteLine($"这里是方法前拦截器，拦截到参数：{JsonSerializer.Serialize(obj)}");
                //    await Task.CompletedTask;
                //}, async (result) =>
                //{
                //    Console.WriteLine($"这里是方法后拦截器，拦截到方法结果：{JsonSerializer.Serialize(result)}");
                //    await Task.CompletedTask;
                //}, async (exp) =>
                //{
                //    Console.WriteLine($"这里是方法异常拦截器，拦截到异常：{exp.Message}");
                //    return await Task.FromResult(new { Message = exp.Message });
                //});
                services.AddAutofac();
            })
            .UseServiceProviderFactory(new AutofacServiceProviderFactory());
    }
}