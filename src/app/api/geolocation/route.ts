export const runtime = "edge"
  
export async function GET(request: Request, { params }: any) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
    const response = await fetch(`https://ipinfo.io/${ip}?token=${process.env.IPINFO_API_KEY}`);
    const data = await response.json();
    console.log(data);
    let latitude, longitude;
    if(data.ip === "::1") {
        [latitude, longitude] = [null,null];
    } else {
        const { loc } = data;
        [latitude, longitude] = loc.split(',');
    }
    return new Response(
      JSON.stringify({ latitude, longitude }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }