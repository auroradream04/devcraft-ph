// app/api/post/route.ts
import postgres from '@/app/utils/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {

    try {
        const client = await postgres.connect();

        const searchParams = request.nextUrl.searchParams;
        const productName = searchParams.get('productName');
        const itemCode = searchParams.get('itemCode');
        const quantity = searchParams.get('quantity');


        const result = await client.query(
            `INSERT INTO item (code, name, quantity) VALUES ($1, $2, $3) RETURNING *`,
            [itemCode, productName, quantity]
        );

        client.release();
        return NextResponse.json(result, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}