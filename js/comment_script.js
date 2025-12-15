const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentList = document.getElementById('commentList');
const errorComment = document.getElementById('errorComment');

submitComment.addEventListener('click', function () {
    const text = commentInput.value.trim();
    errorComment.textContent = '';

    if (!text || text.length < 5) {
        errorComment.textContent = 'Komentar harus minimal 5 karakter.';
        return;
    }

    const item = document.createElement('div');
    item.className = 'comment-item';

    const p = document.createElement('p');
    p.textContent = text;
    item.appendChild(p);

    const btnHapus = document.createElement('button');
    btnHapus.textContent = 'Hapus';
    btnHapus.type = 'button';
    btnHapus.addEventListener('click', function () {
        commentList.removeChild(item);
    });
    item.appendChild(btnHapus);

    commentList.appendChild(item);
    commentInput.value = '';
});