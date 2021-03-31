const {log,clear}=console

clear()
 let list = null

// let node = 
// {
//     value:4,
//     next:null
// }


// create the node
let four=makeNode(4)
let three=makeNode(3)
let two=makeNode(2)
let one=makeNode(1)


// link them together
four.next = three
three.next=two
two.next=one

//log(three)

function printList(list)
{
    // start with the first node
    let current=list
    while (current) 
    {
        log(current.value)
        current=current.next
    }
    
}
// printList(four)
// function makeNode(value)
// {
//     return {value:value,next:null}
// }

class Node
{
    constructor(value, next = null)
    {
        this.value = value,
        this.next = next
    }
}

class List 
{
    
    constructor() 
    {
      this.head = null
      this.tail = null
      this.length=0
    }

    print()
    {
        let current = this.head
        while(current) 
        {
          console.log(current.value)
          current = current.next
        }
    }
    
    append(value) 
    {
      let node = new Node(value)
  
      // Is it currently empty?
      if(!this.tail) 
      {
        // Head and tail are one and the same
        this.head = this.tail = node
        return node
      }
  
      // If it's not empty, tack this on the end,
      // and update `tail` to point at this new node
      this.tail.next = node
      this.tail = node
      this.length++
      // Return the node we added
      return node
    
    }   
    prepend(value) 
    {
      let node = new Node(value)
  
      // Is it currently empty?
      if(!this.head) 
      {
        // gee this looks familiar
        this.head = this.tail = node
        return node
      }
  
      // If it's not empty, this new value
      // will become the `head`, and it will
      // need to point at the old head
      node.next = this.head
      this.head = node
      this.length++
      // Return the node we added
      return node
  }
  removeFirst() 
  {
    // Is the list empty? Give up here.
    if(!this.head) 
   
      return null
   
    // Save a reference to the head,
    // then detach it by pointing `head`
    // at the second node.
    let nodeToRemove = this.head
    this.head = nodeToRemove.next

    // Truly detach this node by removing
    // its link to the rest of the list
    //nodeToRemove.next = null

    // If we're removing the last node,
    // then we need to update `tail` too!
    if(nodeToRemove === this.tail) 
      this.tail = null
    this.length--
    // Maybe the user wants to do something
    // with it. Return the node we removed.
    return nodeToRemove
  }
  findNodeBefore(node) 
  {
    // Exit early if node is null
    if(!node) 
      return null
    
    // There's nothing before the head!
    //
    // (technically we don't need this check here,
    //  can you figure out why?)
    if(node === this.head) 
      return null
    
    // Start at the head
    let current = this.head
    //log(current)
    // Walk the list until `current.next`
    // points at `node`, or until we're out of
    // nodes.
    while(current) 
    {
      // Break out when we find the node
      if(current.next === node) 
        break
      
      // If this wasn't it, then advance
      // to the next one
      current = current.next
    }

    // Breaking out of the loop above left `current`
    // at the node before the `node` we're looking for,
    // so we're done.
    return current
  }
  removeLast() 
  {
    // Is the list empty? Give up here.
    if(!this.tail) 
      return null

    // Save a reference to the tail,
    // then detach it by pointing `tail`
    // at the previous node
    let nodeToRemove = this.tail
    this.tail = this.findNodeBefore(this.tail)
    this.tail.next = null

    // If this was the last node in the list, then
    // update `head`
    if(nodeToRemove === this.head) 
      this.head = null
    this.length--
    return nodeToRemove
  }

  getLength() 
  {
    let current = this.head
    let count = 0
    while(current) 
    {
      count++
      current = current.next
    }
    return count
  }

  insert(value, asIndex) 
  {
    let previous = null
    let current = this.head
    let currentIndex = 0

    // If the index is 0, negative, or falsy
    // we'll insert the node at the front
    if(asIndex <= 0 || !asIndex) 
      // oh hey, we have a function for this!
      return this.prepend(value)

    // If the index is at or past the end, insert this
    // new node at the end
    if(asIndex >= this.length) 
      return this.append(value)

    // create a new node to insert
    let node = makeNode(value)

    // Walk through the list, looking for a place to put it.
    // Keep track of the `previous` node we'll need it soon.
    while(current && currentIndex !== asIndex) 
    {
      previous = current
      current = current.next
      currentIndex++
    }

    // When we're done, `current` points at the
    // node that currently holds the `currentIndex` place,
    // and `previous` is the node before it. We need both,
    // so that we can insert ours in the middle.
    previous.next = node
    node.next = current

    // We added a node! Keep the length up to date.
    this.length++

    return node
  }
  
  remove(index) {
    // If the index is out of range, just return null
    if(index < 0 || index >= this.length) 
      return null
  
    // Use our existing function if this is
    // the first node, rather than handling the
    // special case of previous===null below
    if(index === 0) 
      return this.removeFirst()
  
    // Start at the beginning
    let current = this.head
    let previous = null
    let currentIndex = 0

    // Walk along the list, keeping track of the `previous`
    // We'll need it to re-link everything
    while(current && currentIndex !== index) 
    {
      previous = current
      current = current.next
      currentIndex++
    }

    // Link up the before & after nodes
    previous.next = current.next

    // Unlink this node by wiping out its `next`
    //current.next = null
    this.length--

    return current
  }

  removeElement(element)
  {
   // Start at the beginning
   let current = this.head
   let previous = null
   let currentIndex = 0

   // Walk along the list, keeping track of the `previous`
   // We'll need it to re-link everything
   while(current) 
   {
      if(current.value === element)
      {
        if(previous===null)
          this.head=current.next
        else
        {
          previous.next = current.next
          //current.next = null
          this.length--
        }  
        return current       
     
      }
      previous = current
      current = current.next
     // currentIndex++
   }

   // Link up the before & after nodes

   // Unlink this node by wiping out its `next`

   
  }

}

let test= new List()
test.print()
test.append('t')
test.append('e')
test.append('s')
test.append('t')
//test.print()
//test.findNodeBefore({value:'t',next:null})
//test.removeLast()
test.print()
log('------------------')
//test.removeLast()
//test.removeElement('e')
//test.removeElement('t')
//test.removeElement('t')
//test.removeElement('b')
//test.removeElement('s')
//test.remove(0)
//test.remove(1)
test.removeFirst()
test.print()
