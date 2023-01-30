function coins(data) {
    let change = Number(data[0]);
    let stotinki = Math.floor(change * 100);
    let moneti = 0;
    while (stotinki > 0) {
        if (stotinki >= 200) {
            moneti = moneti + 1;
            stotinki -= 200;
        } else if (stotinki >= 100 && stotinki < 200) {
            moneti = moneti + 1;
            stotinki -= 100;
        } else if (stotinki >= 50 && stotinki < 100) {
            moneti = moneti + 1;
            stotinki -= 50;
        } else if (stotinki >= 20 && stotinki < 50) {
            moneti = moneti + 1;
            stotinki -= 20;
        } else if (stotinki >= 10 && stotinki < 20) {
            moneti = moneti + 1;
            stotinki -= 10;
        } else if (stotinki >= 5 && stotinki < 10) {
            moneti = moneti + 1;
            stotinki -= 5;
        } else if (stotinki >= 2 && stotinki < 5) {
            moneti = moneti + 1;
            stotinki -= 2;
        } else {
            moneti = moneti + 1;
            stotinki -= 1;
        }
    }
    console.log(moneti)
}

coins(['1.18']);