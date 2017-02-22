//全局变量
		var boo=false;
		var outcome=0;
		var ope;//保存运算符
	//获取特定id相应元素函数
		function $(id){
			return document.getElementById(id);
		}
	//数字输入到文本框函数
		function numIpu(num){
			var text=$("reslut")
			if(boo){
				text.value=num;//接收了运算符后文本清零
				boo=false;//重置全局函数，恢复文本框的输入规则
			}else{
				if(text.value=="0"){//	必须是以字符的形式来判断，不然会影响0开头的小数
					text.value=num;
				}else{
					text.value+=num;
				}
			}
			
		}
	//小数点输入到文本框函数
		function decimal(){
			var text=$("reslut");
			if(boo){
				text.value="0."
			}else{
				if(text.value.indexOf('.')==-1){
				//确保只能出现一个小数点
				text.value+="."
				}
			}
		}
	//输入计算符的函数
		function calulate(op){
			var onnum=$('reslut').value;
			if(onnum==''){
				onnum=0
			}
			 	boo=true;
			switch(ope){
				
				case '+':
		        outcome+=parseFloat(onnum);//计算时将字符串转换为浮点
		        break;
		        case '-':
		        outcome-=parseFloat(onnum);
		        break;
		        
		        case '*':
		        outcome*=parseFloat(onnum);
		        break;
		        
		        case '/':
		        outcome/=parseFloat(onnum);
		        break;

		        case '=':
		       	outcome=parseFloat(onnum);
		        break;
		        
		        case '%':
		       	outcome%=parseFloat(onnum);
		        break;

		        case 'x^y':
		       	outcome=Math.pow(outcome,onnum);
		        break;

		        case 'inte':
		        outcome=Math.round(onnum);
		        break;

				default:outcome=parseFloat(onnum);
			}
			$('reslut').value=outcome;
			ope=op;
		}
	//正负号函数
		function plusMinus(){
			var onnum=$('reslut').value;
			if(onnum==''){
				alert("输入不可为0")
			}else{
				outcome=-1*onnum;
			}
			$('reslut').value=outcome;
		}
	//清除函数
		function Clear(){
			$('reslut').value=0;
			outcome=0;
		}
	//退格函数
		function del(){
			var onnum=$('reslut');
			onnum.value=onnum.value.substring(0,onnum.value.length-1);
			if(onnum.value==""){
				onnum.value=0
			}
		}
	//三角函数
		function math(op){
			var onnum=$('reslut').value
			if(onnum==""){
				alert('数据不能为空')
			}
			boo=true;
			with(Math){
				switch(op){
					case 'sin':
					outcome=sin(onnum);
					break;

					case 'cos':
					outcome=cos(onnum);
					break;

					case 'tan':
					outcome=tan(onnum);
					break;

					case 'asin':
					outcome=asin(onnum);
					break;

					case 'acos':
					outcome=acos(onnum);
					break;

					case 'atan':
					outcome=atan(onnum);
					break;

					case 'PI':
					outcome=PI;
					break;

					case '1/x':
					outcome=1/onnum;
					break;

					case 'exp':
					outcome=exp(onnum);
					break;

					case 'lnx':
					outcome=log(onnum);
					break;

					case 'lgx':
					outcome=log(onnum)/log(10);
					break;

					case 'i':
					outcome=floor(onnum);
					break;

					case 'n!':
					outcome=jc(onnum);
					break;

					default:outcome=parseFloat(onnum);
				}
			}
			$('reslut').value=outcome;
		}
		function jc(a){
			if(a==1){
				return 1;
			}else{
				return jc(a-1)*a;
			}
		}