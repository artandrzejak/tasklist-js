// Dla starej wersji bez serwera
/*class Task {
    constructor(title){
        this.id = UID++;
        this.title = title;
    }
}
UID = 1;*/

class Task {
    constructor(id,title,status,createDate){
        this.id = id;
        this.title = title;
        this.status = status;
        this.createDate = createDate;
    }
}

