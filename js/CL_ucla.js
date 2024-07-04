export default class CL_ucla {
constructor(){
   this.maynota = 0;
    this.contfem = 0;
    this.contestudiante = 0;
    this.acumnota = 0;
}
procesarEstudiante(est){
    if(est.nottotal()>this.maynota){
        this.maynota = est.nottotal();
    }
    if(est.sexo == "F" && est.nottotal()>=48){
        this.contfem++;
    }
    this.contestudiante++;
    this.acumnota+=est.nottotal();
}
promedionotas(){
    return this.acumnota/this.contestudiante;
}
devolvermayor(){
    return this.maynota;
}
devolvercontfem(){
    return this.contfem;
}
}