const fs=require('fs');
const filepath='./database.json'
//'./todo.txt'

//ReAD and write shortcut
const Read_tasks=function(){
    const txt_data=fs.readFileSync(filepath,'utf8')
    if(txt_data==''){
        const arr=[]
        return arr
    }
    else{
    const txt_obj=JSON.parse(txt_data)
    return txt_obj;
    }
}
const Write_tasks=function(data){
    fs.writeFileSync(filepath,JSON.stringify(data),'utf8'); 
}

const Todo=function(x){
    const txt_data=Read_tasks()
    if(txt_data==''){
    const data=[]
    data.push({task:x,status:'not_done'});
    Write_tasks(data)
    }
    else{
       const txt_data=Read_tasks()
       txt_data.push({task:x,status:'not_done'})
       Write_tasks(txt_data)
    }
}
const ChangeStatus=function(t_number,y){
    const txt_data=Read_tasks()
    txt_data[t_number].status=y;
    Write_tasks(txt_data)
}
const deletetask=function(t_number){  
    txt_data=Read_tasks();
    txt_data.splice(t_number, 1);
    Write_tasks(txt_data)
}

//exports.write=write;
module.exports={Todo,ChangeStatus,deletetask,Read_tasks}