var txt='';
        var a1;
        var res='';
        var op=document.getElementById('answer');
        function display(value){
            txt+=value;
            op.textContent+=value;
            }
        function display2(v1,v2){
            txt+=v1;
            op.textContent+=v2;
        }
        function root(){
            txt+='Math.sqrt(';
            op.textContent+='√(';
        }
        function bopen(){
            txt+='(';
            op.textContent+='(';
        }
        function bclose(){
            txt+=')';
            op.textContent+=')';
        }
        function ans(){
            op.textContent=a1;
            txt=String(a1);
        }
        function del(){
            var temp=op.textContent;
            if(txt.charAt(txt.length-1) == 't'){
                txt=txt.slice(0,txt.length - 9);
            }
            else if (temp.charAt(temp.length-1) == '^') {
                txt=txt.slice(0,txt.length - 2);
            }
            else{
                txt=txt.slice(0,txt.length - 1);
            }
            console.log(txt);
            temp=temp.slice(0,temp.length - 1);
            op.textContent=temp;
        }
        function clr(){
            txt='';
            op.textContent='';
        }
        function enter(){
            let res=eval(txt);
            a1=res;
            console.log(res);
            op.textContent=res;
        }
