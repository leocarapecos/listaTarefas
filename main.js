$(document).ready(function(){
    
    $('form').on('submit',function(e){
        e.preventDefault();
        let tarefa = $('#input-tarefa').val()
        const novaTarefa = $('.lista ul')
        $(novaTarefa).append(`<li>${tarefa}</li>`)
    
    })

    $('ul').on('click','li',function(){
        
        $('li').css('text-decoration', 'line-through');
    })




})