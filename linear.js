function linearSearch(list,target) 
{
    for (const [i,item] of list.entries()) 
        if (item === target) 
            return console.log('index ke : ',i)
}        
  
let test=[1,2,3,4]
linearSearch(test,4)