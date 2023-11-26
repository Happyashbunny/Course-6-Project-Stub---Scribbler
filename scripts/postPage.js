function commentBtnHandler() {


    var value = document.getElementById('textArea').value;
    
    var template = '<div class="comment">' + value + '</div>';

    document.getElementById('commentBox').innerHTML += template;
    
    document.getElementById('textArea').value = '';
}