export async function POST(req) {
  try {
    const body = await req.json();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Data received",
        receivedData: body,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error processing request",
      }),
      { status: 500 }
    );
  }
}