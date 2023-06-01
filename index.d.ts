declare module '@akrc/electron-next' {
    const prepareRenderer: (directories: string | string[], port: number) => Promise<void>
    export default prepareRenderer
}