export class GlassesList{
    constructor(){
        this.glist = [];

    }
    addGlasses(glasses){
        this.glist.push(glasses)
    }
    renderGlasses(){
        // các thẻ HTML chứa nội dung của các đối tượng kính
        let content = "";
        content = this.glist.reduce((glContent, item, index) => {
            // glContent = glContent + `Nội dung mới`  dấu + ở đây là nối chuỗi
            glContent += `
                <div class="col-4"> 
                    <img class="img-fluid" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt = "Glasses" style="cursor:pointer;">
                
                </div>
            `;
            return glContent; // return ở đây là đẩy cái glContent cho content
        }, "");
        return content; // return ở đây là đẩy cái content ra bên ngoài của render

    }
}