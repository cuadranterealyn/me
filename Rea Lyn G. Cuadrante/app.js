const add = require('./add')
const read = require('./read')
const write = require('./write')

const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {
    note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    var oldnote = read()
    
    add(note,oldnote)

}

if(cmd[2] == 'read') {
    const present = require('./present')
}

if(cmd[2] === "delete") {
    const id = cmd[3]
    const oldnote = read()
    const del = require('./del')

    del(id,oldnote)
    console.log(read)
}