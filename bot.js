const Discord = require("discord.js");
const client = new Discord.Client();
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const prefix = '!';

client.on('ready', () =>{
    console.log('Bot Aktif!')
    client.user.setStatus('idle');
    client.user.setActivity('Herkesi', {type: 'LISTENING'});
});

client.on('message', message =>{
    if(message.content == ('sa'))
        message.reply("as")
    else if(message.content === `${prefix}komutlar`){
        message.channel.send('Komutlar=!dolar,!euro,!sterlin,!yen,!yuan,!leva,!frang');
    }
    else if(message.content === ('ulaş hakkında ne düşünüyosun'))
        message.channel.send('bezduk da bezduk');
    else if(message.content === ('inal hakkında ne düşünüyosun'))
        message.channel.send('PADİŞAHIM ÇOK YAŞA!');
});

client.on('message', message =>{
    if(message.content == ('kek'))
    message.channel.send('hepinizin mk')
});


client.on('message', message =>{
   console.log('gelen mesaj'+message.content)
});































client.on('message', async message => {
	if (message.content === `${prefix}dolar`) {
		const res = await Doviz.getKur("USD"); 
    console.log(res);
        const embed = new Discord.MessageEmbed()
        .setTitle('Güncel Kur Tam Liste')
        .setURL('https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/bugun')
        .setAuthor('Daily Ekomoni')
        .setColor('#006798')
        .setThumbnail('https://i.sozcu.com.tr/wp-content/uploads/2018/08/iecrop/franklin_16_9_1533879266.jpg')
        .addFields(
            { name: 'Döviz Adı', value: res.isim },
            { name: 'Dolar Alış Fiyatı', value: res.alis, inline: true },
            { name: 'Dolar Satış Fiyatı', value: res.satis, inline: true },
        )
        message.channel.send(embed);
        }
	else if (message.content === `${prefix}euro`) {
		const res = await Doviz.getKur("EUR"); 
    console.log(res);
        const embed = new Discord.MessageEmbed()
        .setTitle('Güncel Kur Tam Liste')
        .setURL('https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/bugun')
        .setAuthor('Daily Ekomoni')
        .setColor('#006798')
        .setThumbnail('https://ajssarimg.mediatriple.net/1135785.jpg')
        .addFields(
            { name: 'Döviz Adı', value: res.isim },
            { name: 'Euro Alış Fiyatı', value: res.alis, inline: true },
            { name: 'Euro Satış Fiyatı', value: res.satis, inline: true },
        )
        message.channel.send(embed);
        }
    else if (message.content === `${prefix}sterlin`) {
            const res = await Doviz.getKur("GBP"); 
    console.log(res);
        const embed = new Discord.MessageEmbed()
        .setTitle('Güncel Kur Tam Liste')
        .setURL('https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/bugun')
        .setAuthor('Daily Ekomoni')
        .setColor('#006798')
        .setThumbnail('https://dovizgrafik.com/image/content/sterlin_tl_2.jpg')
        .addFields(
            { name: 'Döviz Adı', value: res.isim },
            { name: 'Sterlin Alış Fiyatı', value: res.alis, inline: true },
            { name: 'Sterlin Satış Fiyatı', value: res.satis, inline: true },
            )
            message.channel.send(embed);
            }
    else if (message.content === `${prefix}yen`) {
            const res = await Doviz.getKur("JPY"); 
        console.log(res);
        const embed = new Discord.MessageEmbed()
        .setTitle('Güncel Kur Tam Liste')
        .setURL('https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/bugun')
        .setAuthor('Daily Ekomoni')
        .setColor('#006798')
        .setThumbnail('https://finanstaksi.com/wp-content/uploads/2018/11/japonya-para-birimi-japon-yeni-neden-degersiz-660x400.jpg')
        .addFields(
            { name: 'Döviz Adı', value: res.isim },
            { name: 'Japon Yeni Alış Fiyatı', value: res.alis, inline: true },
            { name: 'Japon Yeni Satış Fiyatı', value: res.satis, inline: true },
            )
            message.channel.send(embed);
            }
    else if (message.content === `${prefix}yuan`) {
        const res = await Doviz.getKur("CNY"); 
    console.log(res);
            const embed = new Discord.MessageEmbed()
        .setTitle('Güncel Kur Tam Liste')
        .setURL('https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/bugun')
        .setAuthor('Daily Ekomoni')
        .setColor('#006798')
        .setThumbnail('https://cdn.yenicaggazetesi.com.tr/news/244669.jpg')
        .addFields(
            { name: 'Döviz Adı', value: res.isim },
            { name: 'Çin Yuanı Alış Fiyatı', value: res.alis, inline: true },
            { name: 'Çin Yuanı Satış Fiyatı', value: res.satis, inline: true },
            )
        message.channel.send(embed);
            }
            else if (message.content === `${prefix}leva`) {
                const res = await Doviz.getKur("BGN"); 
            console.log(res);
                const embed = new Discord.MessageEmbed()
                .setTitle('Güncel Kur Tam Liste')
                .setURL('https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/bugun')
                .setAuthor('Daily Ekomoni')
                .setColor('#006798')
                .setThumbnail('https://bakis.bg/wp-content/uploads/2020/02/euro-leva-economy-bg-a-750x375.jpg')
                .addFields(
                    { name: 'Döviz Adı', value: res.isim },
                    { name: 'Leva Alış Fiyatı', value: res.alis, inline: true },
                    { name: 'Leva Satış Fiyatı', value: res.satis, inline: true },
                )
                message.channel.send(embed);
                }
                else if (message.content === `${prefix}frang`) {
                    const res = await Doviz.getKur("CHF"); 
                console.log(res);
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Güncel Kur Tam Liste')
                    .setURL('https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/bugun')
                    .setAuthor('Daily Ekomoni')
                    .setColor('#006798')
                    .setThumbnail('https://img.paratic.com/dosya/2016/01/isvicre-frangi-yatirimi-nasil-yapiliyor.jpg')
                    .addFields(
                        { name: 'Döviz Adı', value: res.isim },
                        { name: 'İsviçre Frangı Alış Fiyatı', value: res.alis, inline: true },
                        { name: 'İsviçre Frangı Satış Fiyatı', value: res.satis, inline: true },
                    )
                    message.channel.send(embed);
                    }
            

});





client.login("Nzc2MDU4NTY4NDAyNTM0NDIw.X6vW3Q.H4hgANSngq4isE4DYm6Ojx3Hsbc")
