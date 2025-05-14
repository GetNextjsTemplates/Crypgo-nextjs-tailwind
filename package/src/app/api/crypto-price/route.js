// app/api/crypto-price/route.js
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const ids = searchParams.get('ids') || '';
    const vs_currency = searchParams.get('vs_currency') || 'usd';
  
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currency}`
    );
  
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch prices' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    const data = await response.json();
  
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  