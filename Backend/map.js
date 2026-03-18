// Exercício 1 //

export function dobrar(nums,dobrados) {
    const nums = [1, 2, 3, 4];
    const dobrados = nums.map(n => n * 2);
    console.log('dobrados:', dobrados); 
    return dobrados;
}
dobrar();
