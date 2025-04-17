export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=' text-xl font-semibold mt-8 text-white'>Colors</h3>
      <div className='p-6 rounded-md border mt-4 border-dark_border/60'>
        <p className='text-base font-medium text-muted/60'>
          <span className='font-semibold text-lg text-white'>
            1. Override Colors
          </span>{' '}
          <br />
          For any change in colors : /src/app/globals.css
        </p>
        <div className='py-4 px-5 rounded-md bg-dark_grey mt-8'>
          <p className='text-sm text-gray-400 flex flex-col gap-2'>
            <span>--color-primary: #99e39e;</span>
            <span>--color-secondary: #1dc8cd;</span>
            <span>--color-midnight_text: #263238;</span>
            <span>--color-muted: #d8dbdb;</span>
            <span>--color-error: #cf3127;</span>
            <span>--color-warning: #f7931a;</span>
            <span>--color-light_grey: #505050;</span>
            <span>--color-grey: #f5f7fa;</span>
            <span>--color-dark_grey: #1e2229;</span>
            <span>--color-border: #e1e1e1;</span>
            <span>--color-success: #3cd278;</span>
            <span>--color-section: #737373;</span>
            <span>--color-darkmode: #000510;</span>
            <span>--color-darklight: #0c372a;</span>
            <span>--color-dark_border: #959595;</span>
            <span>--color-tealGreen: #477e70;</span>
            <span>--color-charcoalGray: #666c78;</span>
            <span>--color-deepSlate: #282c36;</span>
            <span>--color-slateGray: #2f3543;</span>
          </p>
        </div>
      </div>
      <div className='p-6 rounded-md border mt-4 border-dark_border/60'>
        <p className='text-base font-medium text-muted/60'>
          <span className='font-semibold text-lg text-white'>
            2. Override Theme Colors
          </span>{' '}
          <br />
          For change , go to : /src/app/globals.css
        </p>
        <div className='py-4 px-5 rounded-md bg-dark_grey mt-8'>
          <p className='text-sm text-gray-400 flex flex-col gap-2'>
            <span>--color-primary: #99e39e;</span>
            <span>--color-secondary: #1dc8cd;</span>
          </p>
        </div>
      </div>
    </>
  )
}
