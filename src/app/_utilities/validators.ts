import { ValidatorFn, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

export class myValidators{

    static compare(control1:string,control2:string):ValidatorFn {
        return (control:AbstractControl):ValidationErrors => {
            //control group
            return {match: control.get('name')===control.get('name2')}
        }
    }
    static checkedArr(controlArr:AbstractControl):ValidationErrors|null
    {
        var countTrue=false;
        var arr=(controlArr as FormArray).controls;
        var i=0;
        while(!countTrue&&i<arr.length-1)
        {
            console.log(arr[i].value);
            if(arr[i++].value)
                countTrue=true;
        }
        var result=null;
        if(!countTrue)
        result={checked: "no items are checked"};
        console.log(result);
        return result;
    }
    
}