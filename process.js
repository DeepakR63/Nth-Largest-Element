var aryElement=new Array;
var aryCount=-1;
function pushElement()
{
	var _data=parseInt(document.getElementById("txt-element").value);
	if(_data==="")
	{
		alert("Invalid Data.");
	}
	else
	{
		aryCount++;
		aryElement[aryCount]=_data;
		bubbleSort();
		document.getElementById("lbl-element").innerHTML="";
		for(var i=0;i<=aryCount;i++)
		{
			document.getElementById("lbl-element").innerHTML+=aryElement[i]+" ";
		
		}
	document.getElementById("lbl-count").innerHTML=aryCount+1;
	document.getElementById("txt-element").value="";
	}
}
function popElement()
{
	
	var _position=parseInt(document.getElementById("txt-position").value);
	_position--;
	if(_position==="" || _position>aryCount || _position<0)
	{
		alert("Invalid Position.");
	}
	else
	{
		alert("The "+(_position+1)+" largest element is : "+aryElement[_position]);
		document.getElementById("txt-position").value="";
	}
}
function bubbleSort()
{
    

var _temp;
for(var i=0;i<=aryCount;i++)
{
	for(var j=i+1;j<=aryCount;j++)
	{
		if(aryElement[i]<aryElement[j])
		{
			_temp=aryElement[i];
			aryElement[i]=aryElement[j];
			aryElement[j]=_temp;
		}
	}
}
}
$(document).ready(function()
{
	$("#btn-generate").click(function()
	{
		$("#div-generate").show();
	});
	
})
$(document).ready(function()
{
		$("#div-generate").hide();
})

