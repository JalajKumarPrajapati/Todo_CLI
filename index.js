const {Todo,ChangeStatus,deletetask}=require('./operations')
const text="hey jaaj";
const {Command }=require('commander');
const program=new Command();

program
  .name('add')
  .description('add task to Todo')
  .version('1.0.0');
program
  .command('add <text>')
  .description('Add Task to Todo')
  .action((text) => {
    Todo(text)
  });

program
  .command('delete <index>')
  .description('Add Task to Todo')
  .action((index) => {
    deletetask(index)
  });
program
  .command('change <a> <b>')
  .description('Takes two inputs and prints them')
  .action((a, b) => {
    ChangeStatus(a,b)
  });    

program.parse(process.argv);
// const initdata=read()
// const main=function(){
//     if (initdata==''){
//         write(data)
//     }
// }
// Todo("Home chores")

// const task_status='done'
// ChangeStatus(0,"done")
// deletetask(0)

