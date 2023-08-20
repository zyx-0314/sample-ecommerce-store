export const Footer = () =>
{
  const year = new Date().getFullYear()

  return (
    <footer className='mt-8 border-t bg-primary-foreground '>
      <div className="mx-auto py-5">
        <p className="text-center text-xs text-black dark:text-white">
          &copy; { year } Nyebe Sample Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
