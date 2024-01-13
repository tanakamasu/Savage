import { BaseCommand, Command, Message } from '../../Structures'

@Command('repo', {
    description: 'Get the base repo of the bot',
    category: 'general',
    aliases: ['script'],
    usage: 'repo',
    cooldown: 5,
    exp: 100
})
export default class extends BaseCommand {
    public override execute = async (M: Message): Promise<void> => {
        const image = await this.client.utils.getBuffer('https://telegra.ph/file/bdd281b87aaa6f4ee0a67.jpg')
        
        let text = ''
        text += `*Elaina* ✨\n\n`
        text += `*fork and give a star 🌟 so you can get more updates* \n\n`
        text += `⚙️ *Repo Link: https://github.com/tanakamasu/Savage*`
        return void (await M.reply(image, 'image', undefined, undefined, text))
    }
}

