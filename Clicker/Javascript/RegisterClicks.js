function canvasclick()
{
    // Default experimental code. not full intregrated in the rest of the system.

    var elem = document.getElementById('GameCanvas'),
    elemLeft = elem.offsetLeft + elem.clientLeft,
    elemTop = elem.offsetTop + elem.clientTop,
    context = elem.getContext('2d'),
    elements = GetEnemies();

    // Add event listener for `click` events.
    elem.addEventListener('click', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;

        // Collision detection between clicked offset and element.
        elements.forEach(function(element) {
            if (y > element.top && y < element.top + element.height 
                && x > element.left && x < element.left + element.width) {
                alert('clicked an element');
            }
        });

    }, false);
}