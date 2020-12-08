class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class node{
    constructor(value){
        this.value= value;
        this.left= null;
        this.right= null;
    }
}

class BST{
    constructor(){
        this.root= null;
    }

    Find(value){
        let cur = this.root;
        if(cur === null)
            return false;
        while(true){
            if(cur === null)
                return false;
            else if(cur.value=== value)
                return true;
            else if(value > cur.value)
                cur= cur.right;
            else if(value < cur.value)
                cur= cur.left;
        }
    }

    Insert(value){
            var newNode = new node(value);
            
            if(this.root === null){
              this.root= newNode;
              return this;
            }
            var cur= this.root;
       

            while(true){

                if(cur.value > value){
                  
                    if(cur.left === null){
                      cur.left=newNode;
                      return this;
                    }
                    
                    cur = cur.left
                }
                else{
                    if(cur.right === null){
                      cur.right=newNode;
                      return this;
                    }
                    cur=cur.right;
                }
            }
        }

    BFS(){
        let q = new Queue;
        let cur = this.root;
        let values=new Array();
        
        while(true){
            values.push(cur.value)
            if(cur.left !== null)
                q.enqueue(cur.left)
            if(cur.right !== null)
                q.enqueue(cur.right)
            cur=q.dequeue()
            if(cur === null)
             break
        }

        console.log(values)
    }

    DFS_pre_order(){
        if(!root) return []
        let q= new Array();
        let cur = root;
        let values= new Array();
        q.push(cur)
        while(true){
            values.push(cur.val)
            q.push(cur)
            if(cur.left){
                cur=cur.left;
            }
            else{
                do{
                    cur = q.pop()
                    cur= cur.right;

                } while(!cur && q.length)
            }

            if(!q.length || !cur) break
        }

        return values;
    }
    DFS_pre_order_recur(){
        let values=[]
        let cur= this.root;
        function traverse(node){
            values.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(cur)
        console.log(values)
        return values
    }

    DFS_post_order(){
        let root= this.root;
        if(!root) return []
        let values=[]
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            
            values.push(node.value)
        }
        traverse(root)
        return values
    }
    DFS_Inorder(){
        let root= this.root;
        if(!root) return []
        let values=[]
        function traverse(node){
            if(node.left) traverse(node.left)
            values.push(node.value)
            if(node.right) traverse(node.right)
    
        }
        traverse(root)
        return values
    }
    remove(value){
        {
            let cur = this.root;
            let pre=cur;
            let temp;
            let [right_bool, left_bool] = [false, false];
            if(cur === null)
                return root;
            while(true){
                if(cur === null)
                    return root;
                else if(cur.value=== value)
                     break
                else if(value > cur.value){
                    pre=cur
                    cur= cur.right;
                    right_bool = true;
                    left_bool= false;
                }
                else if(value < cur.value){
                    pre=cur;
                    cur= cur.left;
                    right_bool = false;
                    left_bool= true;
                }
            }
            
            if(cur.right === null && cur.left === null){
                if(!left_bool && !right_bool)
                    return null
                left_bool ? pre.left = null : pre.right = null;
            }
            else if((cur.right === null && cur.left !== null) ||
               (cur.rigt !== null && cur.left === null)){
                cur.right === null ? temp = cur.left : temp = cur.right;
                if(pre === cur) return temp
                left_bool ? pre.left = temp : pre.right = temp;
            }
            else{
                
                let while_bool=false;
               if(cur.right !== null){
                   temp=cur
                    pre= cur;
                    cur=cur.right;
                   while(cur.left !== null){
                       pre=cur;
                       cur=cur.left;
                       while_bool = true;
                   }
                   while_bool ? pre.left = cur.right : pre.right = cur.right;
                   //pre.right = cur.right;
                   temp.val = cur.val;
               } 
            }
            
            
            return root
            
        }
    }
    
}

let bst = new BST();
bst.Insert(10);
bst.Insert(6);
bst.Insert(15);
bst.Insert(3);
bst.Insert(8);
bst.Insert(20);
bst.remove(10);

console.log(bst.DFS_Inorder())