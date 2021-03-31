function binarySearch(list,target) 
{
    let first =0
    let last =list.length-1
    while (first <= last) 
    {
      let mid=Math.floor((first+last)/2)
      if (list[mid]===target)
        return console.log(mid)
      else if(list[mid]<target) 
        first=mid+1
      else
        last=mid-1
    }
    return console.log('none')
}

let test=[1,2,3,4]
binarySearch(test,4)