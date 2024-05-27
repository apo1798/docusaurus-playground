import { useState } from 'react';

const Request = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse('Requesting...');
    const res = await fetch(url, {
      method,
      ...(method !== 'GET' &&
        method !== 'DELETE' && {
          body,
        }),
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <section className='border-orange-400 border-2 rounded p-2 space-y-4 bg-gray-50 dark:bg-stone-800'>
      <h3 className='text-lg font-bold'>Make a mock request</h3>
      <div className='gap-2 flex flex-col xl:flex-row'>
        <form
          className='grow basis-1/2 flex flex-col gap-2'
          onSubmit={handleFormSubmit}
        >
          <label>
            <div className='text-sm font-bold pb-1'>url</div>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className='px-2 py-0.5 dark:bg-slate-700 border border-slate-500 rounded w-full'
            />
          </label>
          <label>
            <div className='text-sm font-bold pb-1'>method</div>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className='border-slate-500 border rounded px-2 py-1 w-full dark:bg-slate-700'
            >
              <option value='GET'>GET</option>
              <option value='POST'>POST</option>
              <option value='PUT'>PUT</option>
              <option value='PATCH'>PATCH</option>
              <option value='DELETE'>DELETE</option>
            </select>
          </label>
          {method !== 'GET' && method !== 'DELETE' && (
            <label>
              <div className='text-sm font-bold pb-1'>body</div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className='px-2 py-0.5 dark:bg-slate-700 border border-slate-500 rounded h-40 w-full disabled:cursor-not-allowed disabled:dark:bg-slate-900'
              />
            </label>
          )}
          <div className='flex justify-end'>
            <button className='px-3 py-1 bg-green-300 rounded-lg hover:bg-green-400 dark:bg-green-700 dark:hover:bg-green-600'>
              Send
            </button>
          </div>
        </form>
        <pre className='grow basis-1/2 bg-stone-200 whitespace-pre-wrap dark:bg-stone-700'>
          {response
            ? JSON.stringify(response, null, 2)
            : 'Waiting for request...'}
        </pre>
      </div>
    </section>
  );
};
export default Request;
// https://jsonplaceholder.typicode.com/posts/1
