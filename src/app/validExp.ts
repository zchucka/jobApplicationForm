import { FormGroup } from '@angular/forms';


export function HasValidExp(expControlName: string, gradDateControlName: string) {
    return (formGroup: FormGroup) => {
        const expControl = formGroup.controls[expControlName];
        const dateControl = formGroup.controls[gradDateControlName];
        console.log("in my validators");
        if (expControl.errors){
          console.log("returned in errors");
          return;
        }
        var dt1 = dateControl.value.split('-')[0];
        var dt2 = 2020;
        
        console.log(dt1);
        if (expControl.value > dt2 - dt1) {
            expControl.setErrors({ expTooLarge: true });
        } else {
            expControl.setErrors(null);
        }
    }
}
