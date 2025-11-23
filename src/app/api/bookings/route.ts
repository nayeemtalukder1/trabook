// app/api/bookings/route.ts
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Optional: Save to a JSON file (great for demo/testing)
// Or connect to database later (MongoDB, Supabase, etc.)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.fullName || !data.email || !data.phone || !data.travelDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Option 1: Save to JSON file (for demo)
    const filePath = path.join(process.cwd(), "data", "bookings.json");
    const newBooking = {
      id: Date.now(),
      ...data,
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    // Read existing bookings
    let bookings = [];
    try {
      const fileContent = await import(/* webpackIgnore: true */ filePath);
      bookings = fileContent.default || [];
    } catch (err) {
      // File doesn't exist yet → start fresh
      bookings = [];
    }

    // Add new booking
    bookings.push(newBooking);

    // Save back to file
    await writeFile(
      filePath,
      JSON.stringify(bookings, null, 2)
    );

    // Option 2: Later replace with real DB (e.g. Prisma + Postgre私のSQL)
    // await prisma.booking.create({ data: newBooking });

    return NextResponse.json(
      { message: "Booking received! We'll contact you soon.", booking: newBooking },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to save booking" },
      { status: 500 }
    );
  }
}