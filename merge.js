
const {log,clear,count} =console


function split(list)
{
  let mid=Math.floor(list.length/2)
  //log('mid :',mid)
  let left=list.splice(0,mid)
  let right=list
  return [left,right]
}



function mergeSort(list)
  
{
  

  if (list.length<=1) // base case
  {
    log('list length = 1')   
    log('return list : ',list)
    return list    
  }
    
  else
    {
      
      let [leftHalf,rightHalf]=split(list)
      log('left half : ',leftHalf)  // ngerti   8451
      log('right half : ',rightHalf)  // ngerti  3267
      //merge(leftHalf,rightHalf)
      log('masuk rekursif') // ngerti
      count()
      
      let left =mergeSort(leftHalf)   // 8451 => 84 51 => 84 => 8 4 => 8 => 4 => 48 => 51 => 5 1 => 5 => 1 => 15 => 48 15 => 1458
      let right=mergeSort(rightHalf)  // 3267 => 32 67 => 32 => 3 2 => 3 => 2 => 23 =>  67 => 6 7 => 6 => 7 => 67 =>23 67 => 2367 
      
      log('keluar rekursif') // ngerti
      
      log('left mergeSort',left) 
      log('right mergeSort ',right)

      log('masuk merge')

      return merge(left,right)
      
    }  
   // 
  
}

function merge(left,right)
 {
    let result=[]
    let i=0
    let j=0
    log('left ',left)
    log('right ',right)
    while (i < left.length && j<right.length)
    {
      if (left[i] < right[j])
      {
        result.push(left[i])
        log(left[i])
        i=i+1
      }
      else
      { 
        result.push(right[j])
        log(right[j])
        j=j+1
      }  
    }
    
    while (i<left.length)
    {
      result.push(left[i])
      //log(l)
      i=i+1
    }
    
    while (j<right.length)
    {
      result.push(right[j])
      //log(l)
      j=j+1
    }
    
    log('hasil merge : ',result)
    return result
  }
  
let test=[8,7,6,5,4,3,2,1]

let sort = mergeSort(test)
log(sort)
//log('hai')
