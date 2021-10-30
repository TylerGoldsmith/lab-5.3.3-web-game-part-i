// Append New Pictures
// >variables = url left(px) bottom(px) 
function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
// Add Green Character to page
newImage('assets/green-character.gif', 100, 100)
// Add Pine Tree to page
newImage('assets/pine-tree.png', 450, 200)
// Add Tree to page
newImage('assets/tree.png', 350, 100)
// Add Pillar to page
newImage('assets/pillar.png', 150, 200)
// Add Crate to page
newImage('assets/crate.png', 150, 200)
// Add Well to page
newImage('assets/well.png', 500, 425)
// Add Sword to page and remove on button click
let sword = newImage('assets/sword.png', 500, 405)
sword.addEventListener('dblclick', function(){
    sword.remove()
})
//  Add Shield to page
newImage('assets/sheild.png', 165, 185)
//  Add Staff to page
newImage('assets/staff.png', 600, 100)
// 

// 
// 