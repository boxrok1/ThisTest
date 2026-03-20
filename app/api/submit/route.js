export async function POST(req) {
  try {
    // If you want, you can still read the body:
    const body = await req.json();

    // Return 200 OK with no content or a simple message
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error processing request",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
