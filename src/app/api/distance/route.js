// app/api/distance/route.js
import { NextResponse } from 'next/server';
import { Client } from "@googlemaps/google-maps-services-js";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');

  if (!origin || !destination) {
    return NextResponse.json({ error: "Origin and destination are required" }, { status: 400 });
  }

  const client = new Client({});

  try {
    const response = await client.distancematrix({
      params: {
        origins: [origin],
        destinations: [destination],
        mode: "walking",
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    const distance = response.data.rows[0].elements[0].distance;
    const duration = response.data.rows[0].elements[0].duration;

    return NextResponse.json({ distance, duration });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}