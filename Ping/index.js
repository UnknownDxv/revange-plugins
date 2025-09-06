(function (exports, metro, patcher, plugin) {
  "use strict";

  const Commands = metro.findByProps("BUILT_IN_COMMANDS", "registerCommand");

  const PingCommand = {
    name: "ping",
    description: "Replies with Pong!",
    options: [],
    type: 1,
    applicationId: "-1",
    execute: (args, ctx) => {
      return {
        content: "Pong!"
      };
    }
  };

  const pluginObj = {
    onLoad() {
      Commands.registerCommand(PingCommand);
    },
    onUnload() {
      Commands.unregisterCommand(PingCommand);
    }
  };

  exports.default = pluginObj;
  Object.defineProperty(exports, "__esModule", { value: true });
})(window, vendetta.metro, vendetta.patcher, vendetta.plugin);
