export default function toRupiah(value: number): string {
   return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}
