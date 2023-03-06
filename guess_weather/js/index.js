function reset() {
    // 获取audio
    let audio = document.getElementById("audio")
    // 暂停音乐
    audio.pause()
    // 共9种天气，获取9个随机整数
    var randNum = Math.floor(Math.random() * 9) + 1
    let w_src = ''
    switch (randNum) {
        case 1:
            w_src = './images/cloudy.png'
            break;
        case 2:
            w_src = './images/rain.png'
            break; case 3:
            w_src = './images/snow.png'
            break; case 4:
            w_src = './images/sunwithcloud.png'
            break; case 5:
            w_src = './images/sun.png'
            break; case 6:
            w_src = './images/sunriain.png'
            break; case 7:
            w_src = './images/thundershower.png'
            break; case 8:
            w_src = './images/thunder.png'
            break; case 9:
            w_src = './images/wind.png'
            break;
        default:
            break;
    }
    let date = document.getElementById("date_iput").value;
    if (!date) {
        alert('Please input the date')
    } else {
        // 更换天气图片
        document.getElementById("weather").src = w_src;
        // 清空日期
        document.getElementById("date_iput").value = ''
        // 播放音乐
        audio.currentTime = 0;
        audio.play();
    }
}