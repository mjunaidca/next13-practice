import { NextRequest, NextResponse } from "next/server";

import { Pool } from 'pg';

import {
    Kysely,
    PostgresDialect,
    Generated,
    ColumnType,
    Selectable,
    Insertable,
    Updateable,
} from 'kysely';

interface person_Table {
    id: Generated<number>
    first_name: string
    last_name: string
    gender: string
    email?: string
    date_of_birth: any
    country_of_birth: any
}

interface Database {
    person: person_Table
}

export async function GET(request: NextRequest) {
    const db = new Kysely<Database>({
        dialect: new PostgresDialect({
            pool: new Pool({
                ssl: true,
                connectionString: process.env.NEON_DATABASE_URL!
            })
        })
    })

    const result = await db
        .selectFrom("person")
        .selectAll()
        .execute()

    console.log("backend result", result);
    return new NextResponse(JSON.stringify(result));
}