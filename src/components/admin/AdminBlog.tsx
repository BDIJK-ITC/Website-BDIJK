import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  status: 'draft' | 'published';
}

const AdminBlog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "De toekomst van hybride werken met Microsoft 365",
      excerpt: "Ontdek hoe Microsoft 365 de hybride werkplek ondersteunt...",
      content: "Volledige blog content hier...",
      date: "2024-03-15",
      category: "Modern Workplace",
      status: "published"
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  const handleNewPost = () => {
    setIsEditing(true);
    setCurrentPost({
      id: Date.now(),
      title: "",
      excerpt: "",
      content: "",
      date: new Date().toISOString().split('T')[0],
      category: "",
      status: "draft"
    });
  };

  const handleEditPost = (post: BlogPost) => {
    setIsEditing(true);
    setCurrentPost(post);
  };

  const handleSave = () => {
    if (!currentPost) return;

    if (posts.find(p => p.id === currentPost.id)) {
      setPosts(posts.map(p => p.id === currentPost.id ? currentPost : p));
    } else {
      setPosts([...posts, currentPost]);
    }
    
    setIsEditing(false);
    setCurrentPost(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Blog Posts</h1>
        <button
          onClick={handleNewPost}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <Plus size={20} className="mr-2" />
          New Post
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow p-6">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full mb-4 px-4 py-2 border rounded-md"
            value={currentPost?.title || ''}
            onChange={(e) => setCurrentPost(curr => curr ? {...curr, title: e.target.value} : null)}
          />
          
          <input
            type="text"
            placeholder="Category"
            className="w-full mb-4 px-4 py-2 border rounded-md"
            value={currentPost?.category || ''}
            onChange={(e) => setCurrentPost(curr => curr ? {...curr, category: e.target.value} : null)}
          />
          
          <textarea
            placeholder="Excerpt"
            className="w-full mb-4 px-4 py-2 border rounded-md"
            rows={3}
            value={currentPost?.excerpt || ''}
            onChange={(e) => setCurrentPost(curr => curr ? {...curr, excerpt: e.target.value} : null)}
          />
          
          <Editor
            apiKey="your-tinymce-api-key"
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help'
            }}
            value={currentPost?.content}
            onEditorChange={(content) => setCurrentPost(curr => curr ? {...curr, content} : null)}
          />
          
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Post
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditPost(post)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => setPosts(posts.filter(p => p.id !== post.id))}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;