class X {
    msg(){
        console.log("Bom dia");
    }
}

class Y extends X {}

class Z extends X {
    msg(){
        console.log("Boa tarde");
    }
}

const a:X = new X(); a.msg();
const b:Y = new Y(); b.msg();
const c:X = new Y(); c.msg();
const d = new Y(); d.msg();
const e:X = new Z(); e.msg();
