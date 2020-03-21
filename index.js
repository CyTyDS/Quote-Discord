var Discord = require('discord.js');
var auth = require('./auth.json');

var prefix = "q!"; //Prefix de votre Bot ( *play www.youtube.com/ )

// Initialize Discord Bot
var bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Logged in as ' + bot.user.tag + ' !');
});

bot.on('message', message => {
    // Si le msg vient du bot, l'ignorer
    if (message.author.bot) return;

    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with prefix
    var fullCmd = message.content.split(' ');
    var cmdPrefix = fullCmd[0];
    if (cmdPrefix === prefix) {
        var cmd = fullCmd[1];

        switch(cmd) {
            case 'help':
                var debug = new Discord.MessageEmbed()
                // Set the title of the field
                .setTitle('Debug : ')
                // Set the color of the embed
                .setColor(0xff0000)
                // Set the main content of the embed
                .setDescription(
                    "" + prefix + " ping : Je réponds Pong !\n\n"
                );

                var config = new Discord.MessageEmbed()
                .setTitle('Config : ')
                .setColor(0xff0000)
                .setDescription(
                    "" + prefix + " prefix <newPrefix>: Je change mon prefix pour newPrefix.\n\n"
                    + "" + prefix + " ping : \n\n"
                    + "" + prefix + " ping : \n\n"
                    + "" + prefix + " ping : \n\n"
                    + "" + prefix + " ping : \n\n"
                );

                var features = new Discord.MessageEmbed()
                .setTitle('features : ')
                .setColor(0xff0000)
                .setDescription(
                    "" + prefix + " my avatar : Affiche un lien vers votre avatar.\n\n"
                    + "" + prefix + " ping :"
                );

                message.channel.send(
                    "On m'appelle Quote.\n"
                    + "Je suis le bot créé par CyTy#8997.\n"
                    + "Plusieurs commandes sont disponibles : \n",
               );
               message.channel.send(debug);
               message.channel.send(config);
               message.channel.send(features);
            break;

            // q! ping
            case 'ping':
                message.channel.send("pong !");
            break;

            case 'prefix':
                prefix = message.content.split(' ')[2];
                console.log("prefix = " + prefix);
            break;

            case 'my':
                if (fullCmd[2] === "avatar") {
                    message.reply(message.author.displayAvatarURL());
                }
                else {
                    message.channel.send("Mauvais usage de la commande : \n"
                    + prefix +" help pour afficher l'aide");
                }
            break;
            
            case 'escouade':
                // WebHook de l'Escouade
                var hook = new Discord.WebhookClient('264122859608080384', '1_Y_DEDZJDh04xqlhTNfo6OcPNBZO2VbMGZSUSXrM93vZcbs1jpNY1xd7MEITdOH0GB-');

                fullCmd.shift();
                fullCmd.shift();

                var msg = "";

                fullCmd.forEach((str) => {
                    msg += str + " ";
                });

                // Send a message using the webhook
                hook.send(msg);
            break;

            // Just add any case commands if you want to..
        }
    }
});

bot.login(auth.token);
