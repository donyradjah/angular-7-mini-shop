export class Produk {
    _id: string;
    nama_produk: string;
    kategori: {
        _id: string;
        nama_kategori: string;
        createdAt: string;
        updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
}