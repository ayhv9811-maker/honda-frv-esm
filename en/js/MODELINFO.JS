function CreateModelInf()
{
   var   i,j;
   i = 0;
   gModelInfo[i] = SetModelInf('2005');
   j = 0;
   gModelInfo[i].CodeList[j++] = SetModelCode('BE1');
   gModelInfo[i].CodeList[j++] = SetModelCode('BE3');
   i++;
   gModelInfo[i] = SetModelInf('2006');
   j = 0;
   gModelInfo[i].CodeList[j++] = SetModelCode('BE1');
   gModelInfo[i].CodeList[j++] = SetModelCode('BE3');
   gModelInfo[i].CodeList[j++] = SetModelCode('BE5');
   i++;
   gModelInfo[i] = SetModelInf('2007');
   j = 0;
   gModelInfo[i].CodeList[j++] = SetModelCode('BE1');
   gModelInfo[i].CodeList[j++] = SetModelCode('BE5');
   i++;
}
function SetModelInf(strYear)
{
   var  data = new Array;
   data.Year = strYear;
   data.CodeList = new Array;
   return data;
}
function SetModelCode(strCode)
{
   var  data = new Array;
   data.Code = strCode;
   return data;
}
function SetManualType()
{
   gSmFlag = 1;
   gBrmFlag = 1;
}
