function changer() {
    var words = ["Network","Privacy","Data"];
    var idx = Math.floor(words.length * Math.random());
    $('#change').text(words[idx]);
    var time = 1000;
    setTimeout(changer,time);
}



