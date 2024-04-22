import Error from 'page/error';
export default function Custom404() {
    return <Error 
        http={404} title="Not Found" 
        description="Looks like this page is missing. <br/>Did you take a wrong turn?" 
    />;
}