﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Oxygen.ProxyGenerator.Interface
{
    internal interface IRemoteMessageSender
    {
        Task<T> SendMessage<T>(string serverName, object input) where T : class;
    }
}