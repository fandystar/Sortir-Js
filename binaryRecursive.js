function recursiveBinarySearch(list,target) 
{
    if (list.length===0) 
        return console.log(false) 
    else 
    {
        let mid=Math.floor(list.length/2)
        if(list[mid]===target)
          return console.log(true)
        else if(list[mid]<target) 
          return recursiveBinarySearch(list.slice(mid+1),target)
        else
          return recursiveBinarySearch(list.slice(0,mid),target)
    }
}

let test=[1,2,3,4,5]
recursiveBinarySearch(test,0)