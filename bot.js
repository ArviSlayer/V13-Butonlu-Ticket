const simplydjs = require('simply-djs')

client.on('clickButton', async(button) => { 
simplydjs.clickBtn(button, {
    embedDesc: '<@${button.clicker.id}> Adlı Kişi Yeni Bir Ticket Açtı \n Ticket`ı Kapatmak İçin Aşağıdaki Butona Tıkla',
    embedColor: '#075FFF', 
    closeColor: 'red',
    closeEmoji: '🔒', //Emojiyi İstediğiniz Gibi Değiştirebilirsiniz
    delColor: 'grey', 
    delEmoji: '❌', //Emojiyi İstediğiniz Gibi Değiştirebilirsiniz
    openColor: 'green' ,
    openEmoji: '🔓', //Emojiyi İstediğiniz Gibi Değiştirebilirsiniz
    timeout: true, 
    cooldownMsg: 'message',
    categoryID: '', //Kategori ID'yi Buraya Girin
    role: '' //Rol ID'yi Buraya Girin
    })
})

client.on('clickButton', async(button) => { 
simplydjs.clickBtn(button)
})