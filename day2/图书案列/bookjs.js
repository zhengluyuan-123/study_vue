 const app = new Vue({
        el: '#app',
        data: {
            message: '图书购物车',
            // istrue:false,
            books:[
                {id:1,name:'算法导论',data:'2006-9',price:85,count:0,},
                {id:2,name:'unix编程',data:'2002-7',price:45,count:0,},
                {id:3,name:'代码大全',data:'2004-11',price:95,count:0,},
                {id:4,name:'python',data:'2001-2',price:185,count:0,},
                {id:5,name:'c++',data:'2016-9',price:125,count:0,},
            ],
              },
        computed:{
            totle:function () {
                  let all_price=0;
                  for (let item of this.books){
                      all_price=all_price+item.price*item.count
                  }
                  return all_price
                  // return '$'+all_price.toFixed(2)
            }
        },
        methods:{

            // del(id){
            //     for(let item of this.books ){
            //         console.log('del',id);
            //         if(item.id===id){
            //         this.books.splice(id-1,1);
            //             console.log(this.books);
            //         }
            //     }},
            del(index){
              this.books.splice(index,1)
            },
            // add(id){
            //       for(let item of this.books ){
            //           console.log('add',id);
            //           if(item.id===id){
            //         item.count++
            //         }
            //                               }
            //        },
            add(index){
              this.books[index].count++
            },

            // sub(id){
            //       for(let item of this.books ){
            //           console.log('sub',id);
            //           if(item.id===id){
            //         item.count--
            //         }
            //          }
            //        }

            sub(index) {
                if (this.books[index].count > 0) {
                    this.books[index].count--
                }
            },
            // getclass(index){
            //         if(this.books[index].count>0){
            //             return {disabled:false}}
            //     else{
            //              return {disabled:true}}
            //     }
            },
      //过滤器
        filters:{
            showprice(price){
              return '$'+price.toFixed(2)
            },
        }

    })